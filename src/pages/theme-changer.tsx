import { ChangeEvent, FC, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import JSCookie from 'js-cookie';
import axios from 'axios';

import { Layout } from '@/layouts';
import { VALID_THEMES } from '@/themes/constants';

interface Props {
  theme: string;
}

const ThemeChangerPage: FC<Props> = ({ theme }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
  };

  const handleClick = async () => {
    const { data } = await axios.get('/api/hello');
    console.log(data);
  };

  useEffect(() => {
    JSCookie.set('theme', currentTheme);
  }, [currentTheme]);

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema: {currentTheme}</FormLabel>
            <RadioGroup value={currentTheme} onChange={handleRadioChange}>
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
          <Button onClick={handleClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = '' } = req.cookies;

  return {
    props: {
      theme: VALID_THEMES.includes(theme) ? theme : 'light'
    }
  };
};

export default ThemeChangerPage;
