import RegressionData from "./models/regressionData";

export default class RegressionUtils{
    constructor() {
    }
    
    static mapContestsToRegressionData(contests){
        if(contests.length <= 5){
            return [];
        }
        let contestCount = 0;
        let correctCount = 0;
        let totalDifficulty = 0;

        const avgCorrect = [];
        const avgDifficulty = [];
        const correctSubmissions = [];

        contests.forEach((contest, index) => {
            if (contestCount === 0) {
                avgCorrect.push(0);
                avgDifficulty.push(0);
            } else {
                avgCorrect.push(correctCount / contestCount);
                avgDifficulty.push(totalDifficulty / contestCount);
            }

            correctSubmissions.push(contest.correct !== null ? contest.correct : 0);
            totalDifficulty += contest.difficulty !== null ? contest.difficulty : 0;
            correctCount += contest.correct !== null ? contest.correct : 0;

            contestCount += 1;
        });

        return new RegressionData(
            avgDifficulty,
            avgCorrect,
            correctSubmissions,null
        );
    }
}