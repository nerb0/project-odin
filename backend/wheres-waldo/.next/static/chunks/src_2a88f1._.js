(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_2a88f1._.js", {

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
(()=>{
    const e = new Error("Cannot find module 'date-fns'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
import clsx from "clsx";
;
;
;
function calculateDistance(pinpoint, coordinates) {
    return Math.sqrt(Math.pow(pinpoint.x - coordinates.x, 2) + Math.pow(pinpoint.y - coordinates.y, 2));
}
function cn(...classValues) {
    return twMerge(clsx(...classValues));
}
function getContext(context) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contextValue = useContext(context);
    if (!contextValue) {
        throw new Error(`Component must be used inside ${context}`);
    }
    return contextValue;
}
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
export function getTotalTime(timestamps) {
    let total_time = timestamps.reduce((total, { time_start, time_paused })=>{
        if (!time_paused || !time_start) return total;
        return total + differenceInMilliseconds(time_paused, time_start);
    }, 0);
    const last_timestamp = timestamps[timestamps.length - 1];
    if (last_timestamp && !last_timestamp.time_paused) total_time += differenceInMilliseconds(Date.now(), last_timestamp.time_start);
    return total_time;
}

})()),
"[project]/src/components/MenuBoard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MenuBoardItem": ()=>MenuBoardItem,
    "MenuBoardList": ()=>MenuBoardList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'next/navigation'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const MenuBoardContext = /*#__PURE__*/ createContext(null);
function MenuBoardList({ boards }) {
    _s();
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selected, setSelected] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex gap-4",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuBoardContext.Provider, {
            value: {
                loading,
                setLoading,
                selected,
                setSelected
            },
            children: boards.map((board, index)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](MenuBoardItem, {
                    board: board
                }, index, false, {
                    fileName: "<[project]/src/components/MenuBoard.tsx>",
                    lineNumber: 29,
                    columnNumber: 6
                }, this))
        }, void 0, false, {
            fileName: "<[project]/src/components/MenuBoard.tsx>",
            lineNumber: 25,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/MenuBoard.tsx>",
        lineNumber: 24,
        columnNumber: 3
    }, this);
}
_s(MenuBoardList, "tTv0Agsp1Mjv98MLkmCXD0EndOk=");
_c = MenuBoardList;
function MenuBoardItem({ board }) {
    _s1();
    const router = useRouter();
    const [itemLoading, setItemLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const { loading, setLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext"](MenuBoardContext);
    async function createSession(board_id) {
        setItemLoading(true);
        setLoading(true);
        const { message, session_id } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGameSession"](board_id);
        if (!session_id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
        } else {
            router.push(`/game/${session_id}`);
        }
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("flex cursor-pointer flex-col items-center overflow-clip rounded-md bg-slate-600 font-bold text-white transition-all hover:scale-105 hover:bg-slate-500", {
            "pointer-events-none": loading
        }),
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                width: 200,
                height: 200,
                src: board.image,
                alt: board.name,
                className: "h-52 w-72 object-cover"
            }, void 0, false, {
                fileName: "<[project]/src/components/MenuBoard.tsx>",
                lineNumber: 59,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "py-2 text-lg font-bold",
                children: board.name
            }, void 0, false, {
                fileName: "<[project]/src/components/MenuBoard.tsx>",
                lineNumber: 66,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "pb-4",
                onClick: ()=>createSession(board._id),
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("rounded-md px-4 py-1 transition-all hover:scale-105", {
                        "animate-pulse": itemLoading
                    }, {
                        "bg-slate-300 text-slate-600": loading
                    }, {
                        "bg-slate-200 text-slate-700": !loading
                    }),
                    children: itemLoading ? "Loading..." : "Select"
                }, void 0, false, {
                    fileName: "<[project]/src/components/MenuBoard.tsx>",
                    lineNumber: 68,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/MenuBoard.tsx>",
                lineNumber: 67,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/MenuBoard.tsx>",
        lineNumber: 53,
        columnNumber: 3
    }, this);
}
_s1(MenuBoardItem, "jGZfq8jIomwELiTdPNYRy1Fn2Jo=", false, function() {
    return [
        useRouter
    ];
});
_c1 = MenuBoardItem;
var _c, _c1;
__turbopack_refresh__.register(_c, "MenuBoardList");
__turbopack_refresh__.register(_c1, "MenuBoardItem");

})()),
"[project]/src/components/Leaderboard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Leaderboard": ()=>Leaderboard,
    "LeaderboardScoreList": ()=>LeaderboardScoreList
});
(()=>{
    const e = new Error("Cannot find module 'react/jsx-dev-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/actions.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function Leaderboard({ board }) {
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
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-900/70",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "relative flex flex-col gap-4 rounded-md bg-slate-700 p-4 shadow-md lg:w-[700px]",
            children: [
                /*#__PURE__*/ _jsxDEV("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    viewBox: "0 0 24 24",
                    className: "absolute right-3 top-2 h-7 w-7 cursor-pointer rounded-xl p-[2px] text-xl font-bold text-red-300       transition-all hover:scale-110 hover:rounded-md hover:bg-slate-500",
                    onClick: ()=>setShowLeaderBoard(false),
                    children: /*#__PURE__*/ _jsxDEV("path", {
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
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "text-center text-xl font-bold",
                    children: /*#__PURE__*/ _jsxDEV("h1", {
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
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "px-4 text-center",
                    children: /*#__PURE__*/ _jsxDEV(LeaderboardScoreList, {
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
function LeaderboardScoreList({ scores, loading, error }) {
    if (loading) return /*#__PURE__*/ _jsxDEV("div", {
        className: "animate-pulse text-center text-xl font-bold italic text-slate-500",
        children: "Loading scores..."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 75,
        columnNumber: 4
    }, this);
    if (error) return /*#__PURE__*/ _jsxDEV("div", {
        className: "text-slate-600",
        children: error
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 80,
        columnNumber: 20
    }, this);
    if (!scores) return /*#__PURE__*/ _jsxDEV("div", {
        children: "Unable to find scores for this game."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 81,
        columnNumber: 22
    }, this);
    if (scores.length === 0) return /*#__PURE__*/ _jsxDEV("div", {
        className: "text-slate-400",
        children: "There is currently no scores submitted for this game yet."
    }, void 0, false, {
        fileName: "<[project]/src/components/Leaderboard.tsx>",
        lineNumber: 84,
        columnNumber: 4
    }, this);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "lg:h-[700px]",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "relative grid grid-cols-[auto_300px] overflow-scroll",
            children: [
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "sticky top-0 rounded-tl-md border-r border-r-slate-400 bg-slate-500 px-6 text-lg font-bold",
                    children: "User"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 92,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ _jsxDEV("div", {
                    className: "sticky top-0 rounded-tr-md bg-slate-500 px-6 text-lg font-bold",
                    children: "Timer"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Leaderboard.tsx>",
                    lineNumber: 95,
                    columnNumber: 5
                }, this),
                scores.map(({ name, time_finished })=>/*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "border-r border-r-slate-400 bg-slate-500 px-2 text-left [&:nth-child(4n+3)]:bg-slate-600 [&:nth-last-child(2)]:rounded-bl-md",
                                children: name || "Guest"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Leaderboard.tsx>",
                                lineNumber: 100,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
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

})()),
"[project]/src/components/Header.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Header": ()=>Header,
    "LeaderboardContext": ()=>LeaderboardContext
});
(()=>{
    const e = new Error("Cannot find module 'react/jsx-dev-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
"use client";
;
;
;
;
const LeaderboardContext = /*#__PURE__*/ createContext(null);
function Header({ board }) {
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);
    const getLeaderBoard = function getLeaderBoard() {
        if (!board) return;
        setShowLeaderBoard(true);
    };
    return /*#__PURE__*/ _jsxDEV(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxDEV("nav", {
                className: "bg-slate-800/70 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ _jsxDEV(Link, {
                        href: "/",
                        className: "px-6 py-4 rounded-md shadow-md font-bold hover:scale-105 transition-all",
                        children: "Where's Waldo"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Header.tsx>",
                        lineNumber: 21,
                        columnNumber: 5
                    }, this),
                    board && /*#__PURE__*/ _jsxDEV(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "font-bold text-xl",
                                children: board.name
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Header.tsx>",
                                lineNumber: 29,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: "flex items-center gap-2 px-4 py-2 select-none hover:scale-105 transition-all cursor-pointer",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                                        viewBox: "0 0 24 24",
                                        className: "h-6 w-6 fill-slate-50",
                                        children: /*#__PURE__*/ _jsxDEV("g", {
                                            fill: "none",
                                            children: /*#__PURE__*/ _jsxDEV("path", {
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
                                    /*#__PURE__*/ _jsxDEV("div", {
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
            board && showLeaderBoard && /*#__PURE__*/ _jsxDEV(LeaderboardContext.Provider, {
                value: {
                    showLeaderBoard,
                    setShowLeaderBoard
                },
                children: /*#__PURE__*/ _jsxDEV(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Leaderboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Leaderboard"], {
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

})()),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_2a88f1._.js.map