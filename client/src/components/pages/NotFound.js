import React from "react";
import { Link } from "react-router-dom";

import { Button, Typography } from "@material-ui/core/";

function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 40,
      }}
    >
      <div>
        <Typography component="h1" variant="h1">
          404
        </Typography>
        <div>
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraightStrand&accessoriesType=Round&hairColor=Red&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Cry&eyebrowType=RaisedExcited&mouthType=Disbelief&skinColor=Pale"
            alt="notfound"
          />
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Cry&eyebrowType=Default&mouthType=Grimace&skinColor=Light"
            alt="notfound"
          />
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Round&hatColor=Blue01&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Cry&eyebrowType=Default&mouthType=Concerned&skinColor=Pale"
            alt="notfound"
          />
          <img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Cry&eyebrowType=UpDownNatural&mouthType=Sad&skinColor=Black"
            alt="notfound"
          />
        </div>
        <div style={{ padding: 50 }}>
          <Typography variant="body1" component="p">
            We can't seem to find the page you're looking for.
          </Typography>
        </div>
      </div>
      <div style={{ padding: 40 }}>
        <Button
          component={Link}
          to="/"
          type="submit"
          style={{ textTransform: "none" }}
        >
          Return to homepage
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
