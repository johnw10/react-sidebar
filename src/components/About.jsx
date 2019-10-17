import React from "react";
import {
  Styledp,
  Styledul,
  Styledh1,
  Styledh2,
  Styledli
} from "../styled/About";

const About = props => {
  return (
    <>
      <div>
        <Styledh1>About Page</Styledh1>
        <Styledp>
          The term avenir is French for “future”. As being the identify implies,
          the household requires inspiration in the geometric style of
          sans-serif typeface created in the twenties that took the circle as
          being a basis, these types of as Erbar and Futura.
        </Styledp>
        <Styledp>
          Frutiger supposed Avenir being a more natural and organic
          interpretation in the geometric design, more even in colour and well
          suited for prolonged text, with particulars recalling a lot more
          standard typefaces these types of given that the two-storey ‘a’ and
          ‘t’ having a curl for the base, and letters such since the ‘o’ which
          have been not specific, fantastic circles but optically corrected.
        </Styledp>
      </div>
      <div>
        <Styledh2>Recent Posts</Styledh2>
        <hr />
        <Styledul>
          <Styledli>Kollektif Typeface</Styledli>
          <Styledli>Noelan Script Font</Styledli>
          <Styledli>Debby Font Family</Styledli>
          <Styledli>Wreath Font Family</Styledli>
          <Styledli>Selima Script Font Free</Styledli>
          <Styledli>Selima Script Font Free</Styledli>
        </Styledul>
      </div>
    </>
  );
};

export default About;
