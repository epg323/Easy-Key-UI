import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { MuiTelInput } from 'mui-tel-input';
import { useState } from 'react';

const params = new URLSearchParams();
params.append('Channel', 'sms');

const SignIn = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = async () => {
    const removeWhite = / /g;
    const formattedNumber = value.replace(removeWhite, '');
    params.append('To', formattedNumber);
    sessionStorage.setItem('phoneNumber', formattedNumber);

    try {
      const result = await fetch(
        `https://verify.twilio.com/v2/Services/${import.meta.env.VITE_ACCOUNT_VA}/Verifications`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${import.meta.env.VITE_ACCOUNT_SID}:${import.meta.env.VITE_AUTH_TOKEN}`)}`,
          },
          body: params,
        }
      );
      // console.log(result);

      navigate('/sms-code');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Box width="330px" mt={10} ml="auto" mr="auto">
        <Typography variant="h2" color="#000000" fontWeight={800} fontFamily="Raleway" fontSize={24}>
          Enter your phone number
        </Typography>
        <Typography mt="15px" variant="body1" color="#000000" fontWeight={500} fontFamily="Raleway" fontSize={18}>
          We'll text you a code so we can confirm that it's you.
        </Typography>
      </Box>
      <Box mt={15} height="45vh" display="flex" flexDirection="column" justifyContent="space-between">
        <MuiTelInput label="Phone number" value={value} onChange={handleChange} placeholder="+1 123 456 7890" />
        <Button
          sx={{
            color: '#ffffff',
            backgroundColor: '#1336AC',
            width: '350px',
            padding: '12px 12px',
            border: 'solid 1px #1336AC',
            borderRadius: '20px',
            fontFamily: 'inter',
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'none',
          }}
          type="submit"
          onClick={onSubmit}
        >
          Send code
        </Button>
      </Box>
    </>
  );
};

export default SignIn;
