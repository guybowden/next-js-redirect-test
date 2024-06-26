export default function Page() {
  return null;
}

export function getStaticProps({ params }) {
  console.log("Redirector: ", params.slug);
  return {
    redirect: {
      destination: "/",
      permanent: params.slug == "permanent",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
