import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  border: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid ;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ type, isActive }) => 
    isActive && type === 'up' && css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `
  };

  ${({ type, isActive }) => 
    isActive && type === 'down' && css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `
  };
`;

export const Button = styled(RectButton)`
  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ type, theme }) => 
    type === 'up'
    ? theme.colors.success
    : theme.colors.attention
  };
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
