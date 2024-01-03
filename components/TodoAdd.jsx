import { Button, Grid, TextField } from "@mui/material";
import React from "react";

export default function TodoAdd (props) {


    const { onCreate } = props;

    const [inputValue, setInputValue] = React.useState("");
    return (
        <Grid container>
                <Grid  md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        variant="filled"
                        color="text.primary"
                        placeholder="Add Todo here"
                        value={inputValue}
                        onChange={v => setInputValue(v.target.value)}
                        fullWidth
                        sx={{
                            borderColor: 'second.main',
                            bgcolor: 'primary.main'
                        }}
                    />
                </Grid>
                <Grid  md={1} item>
                    <Button
                        color="info"
                        variant="outlined"
                        onClick={() => onCreate(inputValue)}
                        sx={{
                            height: 55,
                        }}
                    >
                        Add
                    </Button>
                </Grid>
        </Grid>
    )

}