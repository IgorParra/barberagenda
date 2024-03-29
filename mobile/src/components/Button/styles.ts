import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'


export const Container = styled(RectButton) `
    width:100%;
    height:60px;
    background:#4A6AC7;
    border-radius: 10px;
    margin-top:10px;

    justify-content:center;
    align-items:center;
`;

export const ButtonText = styled.Text `
    font-family:'RobotoSlab-Medium';
    color: #312e38;
    font-size:18px;
`;