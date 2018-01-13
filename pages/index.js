import Head from "next/head";
import LoadFonts from "~/utilities/Fonts";
import Header from "~/components/Header";
import Block from "~/components/Block";

class Index extends React.Component {
  componentDidMount() {
    LoadFonts();
  }
  render() {
    return (
      <div>
        <div className="p-8 pt-16">
          <Head>
            <title>Memopad</title>
            <link
              href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic:400,400i,700,700i"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Dosis:500"
              rel="stylesheet"
            />
          </Head>
          <style jsx global>{`
            body {
              font: 400 18px/24px "gentium book basic", serif;
              color: #333;
            }
            h1,
            .header,
            .timestamp {
              font-family: "Dosis", sans-serif;
            }
            a,
            a:visited {
              color: #0091ff;
            }
            body {
              opacity: 0;
            }
            .fonts-loaded body,
            .fonts-failed body {
              opacity: 1;
            }
          `}</style>
          <style jsx>{`
            .title {
              margin: 90px 75px 60px;
            }
          `}</style>

          <h1 className="title text-4xl uppercase">Memopad</h1>

          <Header>Deciding the technologies</Header>
          <Block timestamp="05:11 PM">
            Working on building an app with{" "}
            <a href="https://zeit.co/blog/next4">next.js</a>
          </Block>
          <Block>Hopefully I learn some more about SSR along the way</Block>

          <Block>
            Deployments done via Zeit's other great product,{" "}
            <a href="https://now.sh">now</a>
          </Block>
          <Block>
            The source code is available on{" "}
            <a href="https://github.com/pringshia/memopad">Github</a>
          </Block>

          <Block timestamp="05:11 PM">
            Also trying out <a href="https://tailwindcss.com/">Tailwind CSS</a>
          </Block>

          <Block timestamp="12:11 PM">
            So far feeling a bit of a learning curve and running into
            frustration getting things pixel perfect
          </Block>

          <Header>Looking forward, thinking of requirements</Header>
          <Block timestamp="12:11 PM">
            I'd like to focus on the CMS-y parts of this. Need to work on a way
            to quickly add entries.
          </Block>
          <Block>Going to need some sort of input area</Block>
          <Block>The ability to embed images would be cool too</Block>
        </div>
      </div>
    );
  }
}

export default Index;
