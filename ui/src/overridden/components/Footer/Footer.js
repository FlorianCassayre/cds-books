import {
  FrontSiteRoutes,
  getStaticPageByName,
  invenioConfig,
} from '@inveniosoftware/react-invenio-app-ils';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Image, List } from 'semantic-ui-react';

export const Footer = ({ ...props }) => {
  const cernLogo = process.env.PUBLIC_URL + '/cern-logo-white-150.png';
  return (
    <footer>
      <Container fluid className="footer-upper">
        <Container>
          <Grid columns={4} stackable>
            <Grid.Column>
              <Header as="h4" content="CERN Library" />
              <p>
                <Link to={FrontSiteRoutes.openingHours}>
                  Opening hours and holidays
                </Link>
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" content="Help" />
              <List>
                <List.Item>
                  <Link to={FrontSiteRoutes.documentRequestForm}>
                    Request new literature
                  </Link>
                </List.Item>
                <List.Item>
                  <a
                    href="https://library.web.cern.ch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scientific Information Service
                  </a>
                </List.Item>
                <List.Item>
                  <Link to={getStaticPageByName('faq').route}>F.A.Q.</Link>
                </List.Item>
                <List.Item>
                  <Link to={getStaticPageByName('about').route}>About</Link>
                </List.Item>
                <List.Item>
                  <Link to={getStaticPageByName('terms').route}>
                    Terms and Privacy
                  </Link>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" content="Contact us" />
              <List>
                <List.Item>+41 22 767 24 35</List.Item>
                <List.Item>
                  <a href={`mailto:${invenioConfig.APP.libraryEmail}`}>
                    {invenioConfig.APP.libraryEmail}
                  </a>
                </List.Item>
              </List>
              <Header as="h4" content="Technical Support" />
              <List>
                <List.Item>
                  <a href={`mailto:${invenioConfig.APP.supportEmail}`}>
                    {invenioConfig.APP.supportEmail}
                  </a>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as="h4" content="CERN Document Server" />
              <p>
                A{' '}
                <a
                  href="https://cds.cern.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDS
                </a>{' '}
                website
              </p>
              <Image src={cernLogo} size="tiny" href="https://home.cern" />
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
      <Container fluid className="footer-lower">
        <Container>
          <Header as="h4" textAlign="center">
            <Header.Content>CERN Library Catalogue</Header.Content>
            <Header.Subheader>
              Powered by{' '}
              <a
                href="https://inveniosoftware.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                INVENIO
              </a>
            </Header.Subheader>
          </Header>
        </Container>
      </Container>
    </footer>
  );
};
