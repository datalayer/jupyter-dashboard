import { useState } from 'react';
import { Pagehead, Label, Text, Link, Box } from '@primer/react';
import ECharlesIcon from '@datalayer/icons-react/eggs/ECharlesIcon';

type Props = {
  version: string;
}

const AboutTab = (props: Props): JSX.Element => {
  const { version } = props;
  const [egg, setEgg] = useState(false);
  return (
    <>
      <Pagehead as="h2">🪐 🏄 Jupyter Dashboard<Label sx={{marginLeft: 1}}>{version}</Label></Pagehead>
      <Box>
        <Text>Create and publish Dashboard from Jupyter.</Text>
      </Box>
      <Box mt={3}>
        {!egg ?
          <img src="https://assets.datalayer.tech/releases/datalayer-0.2.0-omalley.png" onClick={e => setEgg(true)}/>
            :
          <ECharlesIcon size={300} onClick={e => setEgg(false)}/>
        }
      </Box>
      <Box>
        <Link href="https://datalayer.tech/docs/releases/0.2.0-omalley" target="_blank">
          <Text as="h4">Datalayer 0.2.0 O'Malley Release</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/datalayer/clouder" target="_blank">
          <Text as="h4">Source code</Text>
        </Link>
      </Box>
    </>
  );
}

export default AboutTab;
