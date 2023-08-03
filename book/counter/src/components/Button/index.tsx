import styled from "@emotion/styled";

const Container = styled.button({
  border: 0,
  color: "white",
  backgroundColor: "#ff5722",
  cursor: "pointer",
  padding: "8px 16px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#ff5722",
    opacity: "0.8",
  },
  "&:active": {
    boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, 0.2)",
  },
});

interface Props {
  readonly label: string;
  readonly onClick?: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};
