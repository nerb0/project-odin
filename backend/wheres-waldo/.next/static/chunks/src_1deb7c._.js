(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_1deb7c._.js", {

"[project]/src/app/actions.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/* __next_internal_action_entry_do_not_use__ {"0e7957259bf924530b94939be87f7851c9b57713":"getAllLeaderboards","a2f38eb535be5bbbf689c07c98dd210ed00cf286":"createGameSession","d5e6798aa55f793305e00e33f1db8d5236eb3fb9":"pauseGameSession","f72ddebb5da4df74781f6cc6757a86c980b8f9e9":"pinpointCoordinates","fac60cb6b51ca3c202ebe2ef4a71d8ceaec506c8":"startGameSession"} */ __turbopack_esm__({
    "createGameSession": ()=>createGameSession,
    "getAllLeaderboards": ()=>getAllLeaderboards,
    "pauseGameSession": ()=>pauseGameSession,
    "pinpointCoordinates": ()=>pinpointCoordinates,
    "startGameSession": ()=>startGameSession
});
(()=>{
    const e = new Error("Cannot find module 'private-next-rsc-action-client-wrapper'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
var getAllLeaderboards = createServerReference("0e7957259bf924530b94939be87f7851c9b57713");
;
var pinpointCoordinates = createServerReference("f72ddebb5da4df74781f6cc6757a86c980b8f9e9");
var createGameSession = createServerReference("a2f38eb535be5bbbf689c07c98dd210ed00cf286");
var startGameSession = createServerReference("fac60cb6b51ca3c202ebe2ef4a71d8ceaec506c8");
var pauseGameSession = createServerReference("d5e6798aa55f793305e00e33f1db8d5236eb3fb9");

})()),
"[project]/src/lib/constants.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BOARD_SELECT_SIZE": ()=>BOARD_SELECT_SIZE
});
const BOARD_SELECT_SIZE = 40;

})()),
"[project]/src/utils/helper.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "calculateDistance": ()=>calculateDistance,
    "cn": ()=>cn,
    "formatTimer": ()=>formatTimer,
    "getContext": ()=>getContext,
    "getTotalTime": ()=>getTotalTime
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/date-fns/differenceInMilliseconds.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
;
;
;
function calculateDistance(pinpoint, coordinates) {
    return Math.sqrt(Math.pow(pinpoint.x - coordinates.x, 2) + Math.pow(pinpoint.y - coordinates.y, 2));
}
function cn(...classValues) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](...classValues));
}
function getContext(context) {
    _s();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contextValue = useContext(context);
    if (!contextValue) {
        throw new Error(`Component must be used inside ${context}`);
    }
    return contextValue;
}
_s(getContext, "LIxFXvZbUdXE/TWxKLLXMjM3Mig=");
function formatTimer(timer) {
    let milliseconds = timer % 1000;
    let seconds = Math.floor(timer / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    let result = "";
    if (hours != 0) result += `${hours} hours and `;
    if (minutes != 0) result += `${minutes} minutes and `;
    result += `${seconds}.`;
    result += milliseconds > 0 ? milliseconds > 9 ? milliseconds > 99 ? `${milliseconds}`.slice(0, 3) : `0${milliseconds}`.slice(0, 3) : `00${milliseconds}`.slice(0, 3) : "000";
    return `${result} seconds`;
}
function getTotalTime(timestamps) {
    let total_time = timestamps.reduce((total, { time_start, time_paused })=>{
        if (!time_paused || !time_start) return total;
        return total + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMilliseconds"](time_paused, time_start);
    }, 0);
    const last_timestamp = timestamps[timestamps.length - 1];
    if (last_timestamp && !last_timestamp.time_paused) total_time += __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMilliseconds$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMilliseconds"](Date.now(), last_timestamp.time_start);
    return total_time;
}

})()),
"[project]/src/components/GameBoard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "BoardDropdown": ()=>BoardDropdown,
    "BoardItemFoundPin": ()=>BoardItemFoundPin,
    "DropdownSelectItem": ()=>DropdownSelectItem,
    "DropdownSelectList": ()=>DropdownSelectList,
    "GameBoard": ()=>GameBoard,
    "GameBoardTimer": ()=>GameBoardTimer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
const BoardContext = /*#__PURE__*/ createContext(null);
const TIMER_INTERVAL = 25;
function GameBoard({ board, session }) {
    _s();
    const [clickCoordinates, setCoordinates] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const boardRef = useRef(null);
    const getCoordinates = function getCoordinates(event) {
        const { top, left } = event.currentTarget.getBoundingClientRect();
        const { clientX, clientY } = event;
        setCoordinates({
            x: clientX - left,
            y: clientY - top
        });
    };
    useEffect(()=>{
        function outsideBoardClickHandler(e) {
            if (e.target.closest("#boardContainer") === null) {
                setCoordinates(null);
            }
        }
        function pauseGame() {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pauseGameSession"](session._id);
        }
        window.addEventListener("click", outsideBoardClickHandler);
        if (!session.time_finished) window.addEventListener("beforeunload", pauseGame);
        return ()=>{
            window.removeEventListener("click", outsideBoardClickHandler);
            window.removeEventListener("beforeunload", pauseGame);
        };
    }, [
        session.time_finished,
        session
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex w-screen flex-col gap-2 overflow-hidden pb-2 pt-4",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "px-4",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](GameBoardTimer, {
                    timeFinished: session.time_finished,
                    timestamps: session.timestamps
                }, void 0, false, {
                    fileName: "<[project]/src/components/GameBoard.tsx>",
                    lineNumber: 79,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 78,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("max-w-screen flex items-center justify-center overflow-scroll text-slate-100", {
                    "cursor-pointer": !session.time_finished
                }),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](BoardContext.Provider, {
                    value: {
                        coordinates: clickCoordinates,
                        items: board.items,
                        session,
                        loading,
                        setLoading,
                        setCoordinates
                    },
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        ref: boardRef,
                        id: "boardContainer",
                        className: "relative",
                        onClick: getCoordinates,
                        children: [
                            board.items.map((item, index)=>item.pinpoint && item.found && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](BoardItemFoundPin, {
                                    item: item
                                }, index, false, {
                                    fileName: "<[project]/src/components/GameBoard.tsx>",
                                    lineNumber: 109,
                                    columnNumber: 23
                                }, this)),
                            !session.time_finished && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](BoardDropdown, {}, void 0, false, {
                                fileName: "<[project]/src/components/GameBoard.tsx>",
                                lineNumber: 111,
                                columnNumber: 34
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                draggable: false,
                                src: board.image,
                                alt: board.desc,
                                className: "max-w-none rounded-sm shadow-lg shadow-slate-900/50",
                                style: {
                                    height: `${board.height}px`,
                                    width: `${board.width}px`
                                },
                                width: board.height,
                                height: board.width,
                                quality: 100
                            }, void 0, false, {
                                fileName: "<[project]/src/components/GameBoard.tsx>",
                                lineNumber: 112,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/GameBoard.tsx>",
                        lineNumber: 100,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/GameBoard.tsx>",
                    lineNumber: 90,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 84,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 77,
        columnNumber: 3
    }, this);
}
_s(GameBoard, "+osrt2+nuuddeZmuNLlsmAMnTDA=");
_c = GameBoard;
function GameBoardTimer({ timeFinished, timestamps }) {
    _s1();
    const [timer, setTimer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    useEffect(()=>{
        let interval;
        console.log(timestamps);
        const total_time = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalTime"](timestamps);
        setTimer(total_time);
        interval = setInterval(()=>{
            if (!timeFinished) {
                const total_time = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalTime"](timestamps);
                setTimer((prev)=>(prev || total_time) + TIMER_INTERVAL);
            } else {
                setTimer(timeFinished);
                clearInterval(interval);
            }
        }, TIMER_INTERVAL);
        return ()=>{
            if (interval) clearInterval(interval);
        };
    }, [
        timeFinished,
        timestamps
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "w-fit rounded-md bg-slate-200 px-4 py-2 text-slate-700",
        children: timer ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimer"](timer) : "..."
    }, void 0, false, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 161,
        columnNumber: 3
    }, this);
}
_s1(GameBoardTimer, "/GXbHq18NYWaIKmwUH6Qqpa3StA=");
_c1 = GameBoardTimer;
function BoardItemFoundPin({ item }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "absolute flex items-center justify-center rounded-full bg-green-400/70",
        style: {
            top: `${item.pinpoint.y - 12}px`,
            left: `${item.pinpoint.x - 12}px`
        },
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
            className: "h-6 w-6 text-white",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                d: "M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 182,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/components/GameBoard.tsx>",
            lineNumber: 176,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 169,
        columnNumber: 3
    }, this);
}
_c2 = BoardItemFoundPin;
function BoardDropdown() {
    let { coordinates: boardCoordinates, setCoordinates } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"](BoardContext);
    const is_valid = boardCoordinates !== null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "absolute flex items-start gap-2",
        style: {
            pointerEvents: "auto",
            opacity: `${is_valid ? "1" : "0"}`,
            top: is_valid ? `${boardCoordinates.y - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SELECT_SIZE"] / 2}px` : "",
            left: is_valid ? `${boardCoordinates.x - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SELECT_SIZE"] / 2}px` : ""
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "cursor-pointer rounded-full border-4 border-slate-50 ring ring-offset-2 ring-offset-slate-600",
                onClick: function(event) {
                    event.stopPropagation();
                    setCoordinates(null);
                },
                style: {
                    width: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SELECT_SIZE"]}px`,
                    height: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOARD_SELECT_SIZE"]}px`
                }
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 209,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](DropdownSelectList, {}, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 220,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 198,
        columnNumber: 3
    }, this);
}
_c3 = BoardDropdown;
function DropdownSelectList() {
    const { items } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"](BoardContext);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: (e)=>e.stopPropagation(),
        className: "flex cursor-default select-none flex-col overflow-clip rounded-md bg-slate-600 text-center font-bold text-slate-50 shadow-lg",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "px-2 py-1 text-left text-xs italic",
                children: "Select:"
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 232,
                columnNumber: 4
            }, this),
            items.map((item, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](DropdownSelectItem, {
                    item: item
                }, index, false, {
                    fileName: "<[project]/src/components/GameBoard.tsx>",
                    lineNumber: 234,
                    columnNumber: 5
                }, this))
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 228,
        columnNumber: 3
    }, this);
}
_c4 = DropdownSelectList;
function DropdownSelectItem({ item }) {
    const { coordinates, setCoordinates, session, loading, setLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"](BoardContext);
    const selectItem = async function selectItem(event) {
        event.stopPropagation();
        if (!coordinates) return;
        setLoading(true);
        setCoordinates(null);
        const toast_options = {
            autoClose: 2000
        };
        const { found, message } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinpointCoordinates"](session._id, item._id.toString(), coordinates);
        if (!found) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message, toast_options);
        if (found) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(message, toast_options);
        setLoading(false);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        onClick: selectItem,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("flex min-w-40 items-center px-4 py-1 ", {
            "pointer-events-none bg-green-600": item.found,
            "pointer-events-none": item.found || session.time_finished || loading,
            "cursor-pointer hover:bg-slate-500/50": !item.found
        }),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: item.image,
                width: 50,
                height: 50,
                alt: item.name,
                className: "h-10 w-10 rounded-full border-2 border-white text-xs"
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 271,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex-grow",
                children: item.name
            }, void 0, false, {
                fileName: "<[project]/src/components/GameBoard.tsx>",
                lineNumber: 278,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/GameBoard.tsx>",
        lineNumber: 263,
        columnNumber: 3
    }, this);
}
_c5 = DropdownSelectItem;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_refresh__.register(_c, "GameBoard");
__turbopack_refresh__.register(_c1, "GameBoardTimer");
__turbopack_refresh__.register(_c2, "BoardItemFoundPin");
__turbopack_refresh__.register(_c3, "BoardDropdown");
__turbopack_refresh__.register(_c4, "DropdownSelectList");
__turbopack_refresh__.register(_c5, "DropdownSelectItem");

})()),
"[project]/src/components/Leaderboard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Leaderboard": ()=>Leaderboard,
    "LeaderboardScoreList": ()=>LeaderboardScoreList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
function Leaderboard({ board }) {
    _s();
    const { setShowLeaderBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LeaderboardContext"]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [scores, setScores] = useState(null);
    const [loading, setLoading] = useState(true);
    async function getLeaderboard() {
        setLoading(true);
        try {
            const { scores: fetchScores, message } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllLeaderboards"](board._id.toString(), page);
            setLoading(false);
            if (!fetchScores) setError(message);
            else setScores(fetchScores);
        } catch (error) {}
    }
    useEffect(()=>{
        getLeaderboard();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900/70",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative flex flex-col gap-4 rounded-md bg-slate-700 p-4 shadow-md lg:w-[700px]",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    viewBox: "0 0 24 24",
                    className: "absolute right-3 top-2 h-7 w-7 cursor-pointer rounded-xl p-[2px] text-xl font-bold text-red-300       transition-all hover:scale-110 hover:rounded-md hover:bg-slate-500",
                    onClick: ()=>setShowLeaderBoard(false),
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                        d: "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Leaderboard.tsx>",
                        lineNumber: 44,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 36,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "text-center text-xl font-bold",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        className: "flex-grow",
                        children: [
                            board.name,
                            "'s Leaderboard"
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Leaderboard.tsx>",
                        lineNumber: 50,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 49,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "px-4 text-center",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LeaderboardScoreList, {
                        scores: scores,
                        loading: loading,
                        error: error
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Leaderboard.tsx>",
                        lineNumber: 53,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 52,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Leaderboard.tsx>",
            lineNumber: 35,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 34,
        columnNumber: 3
    }, this);
}
_s(Leaderboard, "n985NKqVV82ueB4+GILw61EtjZM=");
_c = Leaderboard;
function LeaderboardScoreList({ scores, loading, error }) {
    if (loading) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "animate-pulse text-center text-xl font-bold italic text-slate-500",
        children: "Loading scores..."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 75,
        columnNumber: 4
    }, this);
    if (error) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "text-slate-600",
        children: error
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 80,
        columnNumber: 20
    }, this);
    if (!scores) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        children: "Unable to find scores for this game."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 81,
        columnNumber: 22
    }, this);
    if (scores.length === 0) return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "text-slate-400",
        children: "There is currently no scores submitted for this game yet."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 84,
        columnNumber: 4
    }, this);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "lg:h-[700px]",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "relative grid grid-cols-[auto_300px] overflow-scroll",
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "sticky top-0 rounded-tl-md border-r border-r-slate-400 bg-slate-500 px-6 text-lg font-bold",
                    children: "User"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 92,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "sticky top-0 rounded-tr-md bg-slate-500 px-6 text-lg font-bold",
                    children: "Timer"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 95,
                    columnNumber: 5
                }, this),
                scores.map(({ name, time_finished })=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "border-r border-r-slate-400 bg-slate-500 px-2 text-left [&:nth-child(4n+3)]:bg-slate-600 [&:nth-last-child(2)]:rounded-bl-md",
                                children: name || "Guest"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Leaderboard.tsx>",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center justify-center bg-slate-500 px-2  text-sm last:rounded-br-md [&:nth-child(4n+4)]:bg-slate-600",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTimer"](time_finished)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Leaderboard.tsx>",
                                lineNumber: 103,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true))
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Leaderboard.tsx>",
            lineNumber: 91,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 90,
        columnNumber: 3
    }, this);
}
_c1 = LeaderboardScoreList;
var _c, _c1;
__turbopack_refresh__.register(_c, "Leaderboard");
__turbopack_refresh__.register(_c1, "LeaderboardScoreList");

})()),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Header": ()=>Header,
    "LeaderboardContext": ()=>LeaderboardContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'next/link'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Leaderboard.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
const LeaderboardContext = /*#__PURE__*/ createContext(null);
function Header({ board }) {
    _s();
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    const getLeaderBoard = function getLeaderBoard() {
        if (!board) return;
        setShowLeaderBoard(true);
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("nav", {
                className: "bg-slate-800/70 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](Link, {
                        href: "/",
                        className: "px-6 py-4 rounded-md shadow-md font-bold hover:scale-105 transition-all",
                        children: "Where's Waldo"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Header.tsx>",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    board && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "font-bold text-xl",
                                children: board.name
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Header.tsx>",
                                lineNumber: 29,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center gap-2 px-4 py-2 select-none hover:scale-105 transition-all cursor-pointer",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        viewBox: "0 0 24 24",
                                        className: "h-6 w-6 fill-slate-50",
                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("g", {
                                            fill: "none",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("path", {
                                                d: "M15.254 2a2.25 2.25 0 0 1 2.236 2h1.268a1.75 1.75 0 0 1 1.744 1.606l.006.144v3a3.25 3.25 0 0 1-3.066 3.245l-.21.006a5.758 5.758 0 0 1-4.731 3.95V17.5h1.753a3.25 3.25 0 0 1 3.244 3.066l.006.184v.5a.75.75 0 0 1-.649.743l-.101.007H6.75a.75.75 0 0 1-.744-.648l-.006-.102v-.5a3.25 3.25 0 0 1 3.065-3.245l.185-.005H11v-1.549a5.758 5.758 0 0 1-4.729-3.95L6.246 12a3.25 3.25 0 0 1-3.25-3.25v-3c0-.966.784-1.75 1.75-1.75h1.268a2.25 2.25 0 0 1 2.237-2h7.003zm3.504 3.5h-1.254v4.983A1.75 1.75 0 0 0 19 8.904l.007-.154v-3a.25.25 0 0 0-.193-.243l-.057-.007zM6 5.5H4.746a.25.25 0 0 0-.25.25v3a1.75 1.75 0 0 0 1.505 1.733V5.5z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/Header.tsx>",
                                                lineNumber: 38,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Header.tsx>",
                                            lineNumber: 37,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Header.tsx>",
                                        lineNumber: 31,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        onClick: getLeaderBoard,
                                        children: "Leaderboards"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Header.tsx>",
                                        lineNumber: 44,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Header.tsx>",
                                lineNumber: 30,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Header.tsx>",
                lineNumber: 20,
                columnNumber: 4
            }, this),
            board && showLeaderBoard && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](LeaderboardContext.Provider, {
                value: {
                    showLeaderBoard,
                    setShowLeaderBoard
                },
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Leaderboard"], {
                    board: board
                }, void 0, false, {
                    fileName: "<[project]/src/components/Header.tsx>",
                    lineNumber: 53,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Header.tsx>",
                lineNumber: 50,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
_s(Header, "e4/WYe7j9NmxHR7G6Bb4XPbibHg=");
_c = Header;
var _c;
__turbopack_refresh__.register(_c, "Header");

})()),
"[project]/src/app/game/[gameId]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_1deb7c._.js.map