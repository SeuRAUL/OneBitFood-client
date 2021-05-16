import ShowRestaurant from '../../components/ShowRestaurant';

// # SSR

// export default function Restaurant({restaurant, isError = false}) {
//   return <ShowRestaurant restaurant={restaurant} isError={isError} />
// }

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   try {
//     const res = await fetch(`${process.env.apiUrl}/api/restaurants/${id}`);
//     const restaurant = await res.json();
//     const isError = res.ok ? false : true
//     return { props: { restaurant, isError: isError }, }
//   } catch {
//     return { props: { isError: true }, }
//   }
// }

// # /SSR
// ---------------------------------------------------------

// # SSG

export default function Restaurant({restaurant}) {
  return <ShowRestaurant restaurant={restaurant} />
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.apiUrl}/api/restaurants`);
  const restaurants = await res.json();

  const paths = restaurants.map((restaurant) => ({
    params: { id: restaurant.id.toString() }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.apiUrl}/api/restaurants/${params.id}`);
  const restaurant = await res.json();
  return {
    props: { restaurant },
    revalidate: 120
  }
}

// # /SSG