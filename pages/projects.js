import useSWR from "swr";
import axios from 'axios'
import Layout from "../components/Layout";
import CardListProject from "../components/Projects/CardListProject";

const fetcher = url => axios
  .get(url)
  .then(res => res.data)

export default function Work() {
  const { data, error } = useSWR("/api/projects", fetcher);

  if (error) {
      console.log( error )

      return <div>failed to load</div>
  }

  if (!data) {
      return (
          <Layout>
              <div className = "mt-7 text-center italic">
                loading...
              </div>
          </Layout>
      )
  }

  return (
    <Layout>
      <CardListProject data = { data } />
    </Layout>
  );
}
