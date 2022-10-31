import { buildQueries } from '@testing-library/react'
import styled from 'styled-components'

export const Button = styled.button`
color: ${props => props.contact?"red":"blue"};
background: papayawhip;

`
// export const Form = styled.