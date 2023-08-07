import React from "react";
import {Alert, AlertColor, Snackbar} from "@mui/material";

type SnackBarPropsType = {
    error: string | null
    success: string | null
    setError: (error: string | null) => void
    setSuccess: (success: string | null) => void
}

export const SnackBar: React.FC<SnackBarPropsType> = ({error, success, setError, setSuccess}) => {

    const severity: AlertColor = success ? 'success' : 'error'
    const message = success ? success : error

    const handleClose = async () => {
        error && setError(null)
        success && setSuccess(null)
    }

    const isOpen: boolean = !!error || !!success

    return (<>
        {message && <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant="filled" severity={severity}>{message}</Alert>
        </Snackbar>}
    </>);
}