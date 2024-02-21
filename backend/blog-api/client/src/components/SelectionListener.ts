import { InitReady, prosePluginsCtx } from "@milkdown/core";
import { Ctx, MilkdownPlugin, createSlice } from "@milkdown/ctx";
import { Node } from "@milkdown/prose/model";
import { Plugin, PluginKey, Selection } from "@milkdown/prose/state";
import { debounce } from "lodash";

type SelectionListener = (ctx: Ctx, selection: Selection, doc: Node) => void;
export class SelectionManager {
	selectionListeners: Array<SelectionListener> = [];

	get listeners() {
		return {
			selection: this.selectionListeners,
		};
	}

	selection(fn: SelectionListener) {
		this.selectionListeners.push(fn);
		return this;
	}
}

export const selectionListenerCtx = createSlice(
	new SelectionManager(),
	"selection-listener",
);

export const key = new PluginKey("MILKDOWN_SELECTION_LISTENER");

export const selectionListener: MilkdownPlugin = (ctx) => {
	ctx.inject(selectionListenerCtx, new SelectionManager());

	return async () => {
		await ctx.wait(InitReady);
		const listener = ctx.get(selectionListenerCtx);
		const { listeners } = listener;

		let prevSelection: Selection | null = null;

		const plugin = new Plugin({
			key,
			state: {
				init: () => {},
				apply: (tr) => {
					if (prevSelection != null && tr.selection.eq(prevSelection)) return;

					const handler = debounce(() => {
						const { selection, doc } = tr;
						if (
							listeners.selection.length > 0 &&
							(prevSelection == null || !prevSelection.eq(selection))
						) {
							listeners.selection.forEach((fn) => {
								fn(ctx, selection, doc);
							});
						}
						prevSelection = tr.selection;
					}, 200);

					return handler();
				},
			},
		});

		ctx.update(prosePluginsCtx, (x) => x.concat(plugin));
	};
};
