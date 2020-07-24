import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 992px;
  min-width: 650px;
  margin-top: 42px;
  padding: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export default {
  Root,
  Container,
  Wrapper,
};
