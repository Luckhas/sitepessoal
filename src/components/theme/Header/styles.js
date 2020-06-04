import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContainerHeader = styled(Container)`
    ${( props => props.id === 'navbar' ? 'background-color: aqua;' :  'background-color: red;')};
`;

