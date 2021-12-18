import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


interface IGitRepo {
    id: number,
    name: string,
    description: string
}

var initialGitState: IGitRepo[]
var isLoaded: boolean = false

function List() {
    var [ RepData, setRepData ] = useState(initialGitState);

    useEffect(() => {
        
        fetch(`https://api.github.com/users/vladdy-moses/repos`)
        .then(res => res.json())
        .then((res: IGitRepo[])  => {
            setRepData(RepData = res);
        })
        isLoaded = true;
    }, []);

    console.log(RepData);

    if (!isLoaded){ 
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div >
                <ul>
                    {RepData.map(item => (
                        <li key={item.id}>
                             <Box sx={{ minWidth: 275 }}>
                                <Card variant="outlined">{
                                    <React.Fragment>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    </React.Fragment>} 
                                </Card>
                            </Box>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;