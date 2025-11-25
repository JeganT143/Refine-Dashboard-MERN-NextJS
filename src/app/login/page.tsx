"use client";

import { yariga } from "@/assets";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLogin } from "@refinedev/core";
import { ThemedTitle } from "@refinedev/mui";

// logo

export default function Login() {
  const { mutate: login } = useLogin();

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FCFCFC",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >
        <ThemedTitle
          collapsed={false}
          wrapperStyles={{
            fontSize: "22px",
            justifyContent: "center",
          }}
        />
        <Button
          style={{ width: "240px" }}
          variant="contained"
          size="large"
          onClick={() => login({})}
        >
          Sign in
        </Button>
        <Typography align="center" color={"text.secondary"} fontSize="12px">
          Powered by
          <img
            style={{ padding: "0 5px" }}
            alt="yariga logo"
            src={yariga.src}
          />
          Google
        </Typography>
      </Box>
    </Container>
  );
}
