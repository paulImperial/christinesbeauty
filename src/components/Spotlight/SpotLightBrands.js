import client from '../../helpers/sanity';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { groq } from 'next-sanity';
import { SpotlightContainer, SpotlightBox, SpotlightImage } from './Spotlight.styles';
import urlFor from '../../helpers/imageBuilder';

const queryClient = new QueryClient();

const SpotlightBrands = () => {
  const { data, error, isLoading } = useQuery('brand', async () => {
    return client.fetch(
      groq`*[_type == "brand"]{
        _id,
        name,
        image,
        link
      }`
    );
  });

  if (isLoading) {
    return null
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <SpotlightContainer {...data}>
        {data.map((brand) => (
          <a href={brand.link} target="_blank" rel="noreferrer noopener" key={brand.link}>
            <SpotlightBox externalLink={'/images/external-link.png'}>
              <SpotlightImage image={urlFor(brand.image).url()} dark={brand.dark}>
           
              </SpotlightImage>
            </SpotlightBox>
          </a>
        ))}
      </SpotlightContainer>
  );
};

const SpotlightBrandsComponent = ({ brands }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SpotlightBrands brands={brands} />
    </QueryClientProvider>
  );
};

export default SpotlightBrandsComponent;