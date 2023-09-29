export type GoldlabelShape = {
    mode: "dark"|"light"
    primary: string
    secondary: string
    loading: boolean
    loaded: boolean
    error: any
    notify: NotifyShape | null
    events: Array<EventShape>
    betslip: EventShape | null
}

export type EventShape = {
    event_id: string
    event_name: string
    odds: number
}

export type NotifyShape = {
    severity: string
    message: string
    code: number
}

export type PoolShape = {
    user: string
    host: string
    database: string
    password: string
    port: number,
}

export type KeyValueShape = {
    key: string
    value: any
}
