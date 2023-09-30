import React from "react"
import {EventShape} from "../../../../types"
import {
    Box,
    CardContent,
    CardActions,
    CardHeader,
    CardMedia,
    List,
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
    Event,
} from "../../Dashboard"


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
            <Box sx={{m:1}}>
                <CardHeader 
                    avatar={<Icon icon="rocket" color="secondary" />}
                    title={<Font variant="giant">
                                Massive Shoes Cup
                            </Font>}
                    action={<Box sx={{m:1}}>
                                <ModeToggle />
                                <Reset />
                            </Box>}
                />
                <CardMedia 
                    sx={{px:2}}
                    component={"img"}
                    height={175}
                    src={"/massive-shoes.webp"}
                    alt={"Massive Shoes Cup"}
                />
                <CardContent>
                    {events.length ? <>
                        <List>
                            {events.map((event: EventShape, i: number) => {
                                return <Event key={`event_${i}`} event={event} />
                            })}
                        </List>
                    </> : null }
                </CardContent>
                <CardActions>
                    <Box sx={{flexGrow:1}}/>
                    
                    <Box sx={{flexGrow:1}}/>
                </CardActions>

                {error ? <>
                    <Alert sx={{m:1}} severity={error.severity}>
                        <AlertTitle>
                            <Font>
                                {error.message} 
                            </Font>
                        </AlertTitle>
                    </Alert>
                </> : null }
                
            </Box>
          </>)
}


/*
<pre>events: {JSON.stringify(events, null, 2)}</pre>
*/