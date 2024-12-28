import React from 'react'
import { Form, FormBox, FullnameBox, InputBox, Root, Title } from './InformationStyle'
import { Box, Button, Typography } from '@mui/material'

export default function Information() {
  return (
    <Root>
        <FormBox>
            <Title>
                <Typography variant='subtitle1'>Say hello</Typography>
                <Typography variant='body1' color='#777777'>Lorem Ipsum is simply dummy text of the printing .</Typography>
            </Title>

            <Form>
                <FullnameBox>
                    <InputBox>
                        <label htmlFor="input">First Name</label>
                        <input type="text" />
                    </InputBox>
                    <InputBox>
                        <label htmlFor="input">Last Name</label>
                        <input type="text" />
                    </InputBox>
                </FullnameBox>

                <InputBox className='inputBox'>
                    <label htmlFor="input">Email Address</label>
                    <input type="text"/>
                </InputBox>

                <InputBox className='inputBox'>
                    <label htmlFor="input">Message</label>
                    <textarea rows="15"></textarea>
                </InputBox>
            </Form>

            <Button variant='contained'>Get in touch</Button>
        </FormBox>
    </Root>
  )
}
