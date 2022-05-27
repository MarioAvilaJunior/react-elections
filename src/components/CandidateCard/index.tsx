import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { IElectionWithCandidate } from "../../pages/ReactElections";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

interface ICandidateCardProps {
  election: IElectionWithCandidate;
  totalElectionVotes: number;
  elected: boolean;
}

const CandidateCard = (props: ICandidateCardProps) => {
  const { election, totalElectionVotes, elected } = props;
  const classes = useStyles();

  const candidateVotesPercentage = (electionVotes: number): string => {
    return (
      ((electionVotes * 100) / totalElectionVotes).toFixed(2).toString() + "%"
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="candidate"
            className={classes.avatar}
            src={`/../../../img/${election.candidateUserName}.png`}
          />
        }
        title={election.candidateName}
        subheader={
          candidateVotesPercentage(election.votes) +
          `\r\n${election.votes} votos`
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {elected ? "Eleito" : "Não eleito"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { CandidateCard };
