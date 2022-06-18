import { Button } from 'react-native'
import React from 'react'

const ButtonCustom = ({title, callback}) => {
    return (
        <>
            <Button
            onPress={callback}
            title={title}
            />
        </>
    )
}

ButtonCustom.defaultProps = {
    title: 'title',
}

export default ButtonCustom;