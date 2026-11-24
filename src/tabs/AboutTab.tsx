import { useState } from 'react';
import { PageHeader, Label, Text, Link, Box } from '@primer/react';
import { SkubbleIcon } from '@datalayer/icons-react/eggs';

type Props = {
  version: string;
}

const AboutTab = (props: Props): JSX.Element => {
  const { version } = props;
  const [egg, setEgg] = useState(false);
  return (
    <>
      <PageHeader as="h2">🪐 🏄 Jupyter Dashboard<Label sx={{marginLeft: 1}}>{version}</Label></PageHeader>
      <Box>
        <Text>Create and publish Dashboard from Jupyter.</Text>
      </Box>
      <Box mt={3}>
        {!egg ? (
          <img
            src="https://assets.datalayer.tech/releases/datalayer-0.3.0-black-snake_1024.png"
            onClick={e => setEgg(true)}
            style={{ width: '100%' }}
          />
        ) : (
          <SkubbleIcon size={300} onClick={e => setEgg(false)} />
        )}
      </Box>
      <Box>
        <Link
          href="https://datalayer.tech/docs/releases/0.3.0-black-snake"
          target="_blank"
        >
          <Text as="h4">Datalayer 0.3.0 Black Snake Release</Text>
        </Link>
      </Box>
      <Box>
        <Link href="https://github.com/datalayer/jupyter-dashboard" target="_blank">
          <Text as="h4">Source code</Text>
        </Link>
      </Box>
    </>
  );
}

export default AboutTab;
