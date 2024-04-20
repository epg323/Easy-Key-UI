import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Otp from '../components/OTP';

const params = new URLSearchParams();

const SendCode = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const handleChange = async (newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value.length <= 5) return;

    const verifyCode = async () => {
      const phoneNumber = sessionStorage.getItem('phoneNumber');
      if (!phoneNumber) return;
      params.append('To', phoneNumber);
      params.append('Code', value);

      try {
        const result = await fetch(
          `https://verify.twilio.com/v2/Services/${import.meta.env.VITE_ACCOUNT_VA}/VerificationCheck`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(`${import.meta.env.VITE_ACCOUNT_SID}:${import.meta.env.VITE_AUTH_TOKEN}`)}`,
            },
            body: params,
          }
        );
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };

    verifyCode();
    navigate('/wallet');
  }, [navigate, value]);
  return (
    <>
      <Box mt={10} ml="auto" mr="auto">
        <Typography variant="h2" color="#000000" fontWeight={800} fontFamily="Raleway" fontSize={24}>
          Enter the code
        </Typography>
      </Box>
      <Box mt={15} height="12vh" display="flex" flexDirection="column" justifyContent="space-between">
        <Otp separator={<span>-</span>} value={value} onChange={handleChange} length={6} />
        <Typography mt="15px" variant="body1" color="blue" fontWeight={400} fontFamily="Raleway" fontSize={12}>
          Resend code
        </Typography>
      </Box>
    </>
  );
};

export default SendCode;
