import Dashboard from "./Dashboard"
import {useGoldlabelDispatch} from "./hooks/useGoldlabelDispatch"
import {useGoldlabelSelect} from "./hooks/useGoldlabelSelect"
import {
    setGoldlabelKey,
    selectError,
    selectMode,
    selectNotify,
    selectLoading,
    selectLoaded,
    selectEvents,
    selectSecondary,
    selectPrimary,
} from "./redux/reducer"
import {store, persistor} from "./redux/store"
import {WrapRedux} from "./redux/WrapRedux"
import {Font} from "./theme/Font"
import {makeTheme} from "./theme/makeTheme"
import Icon from "./theme/Icon"
import MuiTheme from "./theme/MuiTheme"
import Event from "./components/Event"
import Events from "./components/Events"
import ModeToggle from "./components/ModeToggle"
import Reset from "./components/Reset"
import Notify from "./components/Notify"
import {notification} from "./actions/notification"
import {resetRedux} from "./actions/resetRedux"
import {toggleMode} from "./actions/toggleMode"
import {fetchEvents} from "./actions/fetchEvents"

export {
    Dashboard,
    notification,
    resetRedux,
    toggleMode,
    fetchEvents,
    useGoldlabelDispatch,
    useGoldlabelSelect,
    setGoldlabelKey,
    selectError,
    selectMode,
    selectNotify,
    selectLoading,
    selectLoaded,
    selectEvents,
    selectSecondary,
    selectPrimary,
    store,
    persistor,
    WrapRedux,
    Font,
    Icon,
    makeTheme,
    MuiTheme,
    Events,
    Event,
    ModeToggle,
    Reset,
    Notify,
}
