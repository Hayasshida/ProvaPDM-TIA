import * as toxicity from "@tensorflow-models/toxicity"

export const toxicityTest = async (sentence) => {

    const threshold = 0.75;

    await toxicity.load(threshold).then(async model => {

         await model.classify(sentence).then(predictions => {

            const negativeMatches = [];

            for(let i = 0; i < predictions.length; i++){
                if(predictions[i].results[0].match){
                    negativeMatches[negativeMatches.length] = predictions[i].label
                }
                else if(predictions[i].results[0].probabilities[0] > predictions[i].results[0].probabilities[1]){
                        predictions[i].results[0].match = false
                }else{
                    predictions[i].results[0].match = true;
                    negativeMatches[negativeMatches.length] = predictions[i].label;
                };
            
            };

            return negativeMatches;
            
        });
        
    });
};
