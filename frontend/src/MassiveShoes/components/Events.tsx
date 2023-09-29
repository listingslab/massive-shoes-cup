import React from "react"
import {EventShape} from "../../../../types"
import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    CardMedia,
    List,
    ListItemButton,
    ListItemText,
    Alert,
    AlertTitle,
} from "@mui/material"
import {
    Icon,
    Font,
    ModeToggle,
    Reset,
    useGoldlabelSelect,
    useGoldlabelDispatch,
    selectLoaded,
    selectLoading,
    selectEvents,
    selectError,
    fetchEvents,
} from "../../MassiveShoes"


export default function Events() {
    const dispatch = useGoldlabelDispatch()
    const loading = useGoldlabelSelect(selectLoading)
    const loaded = useGoldlabelSelect(selectLoaded)
    const events = useGoldlabelSelect(selectEvents)
    const error = useGoldlabelSelect(selectError)
    React.useEffect(() => {
        if(!loading && !loaded) dispatch(fetchEvents())
    }, [loading, loaded, dispatch])

    return (<>

                {error ? <>
                    <Alert sx={{m:1}} severity={error.severity}>
                        <AlertTitle>
                            <Font>
                                {error.message} 
                            </Font>
                        </AlertTitle>
                        
                    </Alert>
                </> : null }


            <Card sx={{m:1}}>
                <CardHeader 
                    avatar={<Icon icon="rocket" color="secondary" />}
                    title={<Font variant="title">
                                Massive Shoes
                            </Font>}
                />
                <CardMedia 
                    component={"img"}
                    height={175}
                    src={"/massive-shoes.webp"}
                    alt={"pimoroni"}
                />

                <CardContent>
                    {events.length ? <>
                    <List>
                        {events.map((event: EventShape, i: number) => {
                            // console.log("event", event)
                            const {
                                event_id,
                                event_name,
                            } = event
                            return <ListItemButton
                                        key={event_id}
                                    >
                                        <ListItemText 
                                            primary={<Font>
                                                {event_name}
                                            </Font>}
                                        />
                                        
                                    </ListItemButton>
                        })}
                    </List>
                </> : null }
                
                </CardContent>
                <CardActions>
                    <Box sx={{flexGrow:1}}/>
                    <ModeToggle />
                    <Reset />
                </CardActions>
            </Card>
          </>)
}

/*
<pre>events: {JSON.stringify(events, null, 2)}</pre>
*/