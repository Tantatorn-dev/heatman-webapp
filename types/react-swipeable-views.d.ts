export default class _default {
    static defaultProps: {
        animateHeight: boolean;
        animateTransitions: boolean;
        axis: string;
        disableLazyLoading: boolean;
        disabled: boolean;
        enableMouseEvents: boolean;
        hysteresis: number;
        ignoreNativeScroll: boolean;
        index: number;
        resistance: boolean;
        springConfig: {
            delay: string;
            duration: string;
            easeFunction: string;
        };
        threshold: number;
    };
    static displayName: string;
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    forceUpdate(callback: any): void;
    getChildContext(): any;
    handleTransitionEnd(): void;
    render(): any;
    setIndexCurrent(indexCurrent: any): void;
    setState(partialState: any, callback: any): void;
}
export default namespace _default {
    namespace childContextTypes {
        function swipeableViews(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace swipeableViews {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
    namespace propTypes {
        function action(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace action {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function animateHeight(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace animateHeight {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function animateTransitions(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace animateTransitions {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function axis(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace axis {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function children(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        function containerStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace containerStyle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function disableLazyLoading(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace disableLazyLoading {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function disabled(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace disabled {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function enableMouseEvents(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace enableMouseEvents {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function hysteresis(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace hysteresis {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function ignoreNativeScroll(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace ignoreNativeScroll {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function index(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace index {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onChangeIndex(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onChangeIndex {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onMouseDown(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onMouseDown {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onMouseLeave(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onMouseLeave {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onMouseMove(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onMouseMove {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onMouseUp(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onMouseUp {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onScroll(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onScroll {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onSwitching(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onSwitching {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onTouchEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onTouchEnd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onTouchMove(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onTouchMove {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onTouchStart(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onTouchStart {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function onTransitionEnd(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace onTransitionEnd {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function resistance(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace resistance {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function slideClassName(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace slideClassName {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function slideStyle(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace slideStyle {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function springConfig(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace springConfig {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function style(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace style {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
        function threshold(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        namespace threshold {
            function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
        }
    }
}
