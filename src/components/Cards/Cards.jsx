import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import './Cards.css'
const Cards =({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    // console.log(confirmed)
    if(!confirmed){
        return 'Loading...'
    }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className="card infected">
                    <CardContent>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active casses of <strong>COVID-19</strong></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card recovered">
                    <CardContent>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />    
                        </Typography>
                        <Typography  color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography  variant="body2">number of recoveries from <strong>COVID-19</strong></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className="card deaths">
                    <CardContent>
                        <Typography variant="h4" color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5">
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths by <strong>COVID-19</strong></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
