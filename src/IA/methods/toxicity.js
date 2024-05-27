import * as toxicity from "@tensorflow-models/toxicity"

const toxicityTest = async (sentence) => {

    const threshold = 0.75;

    await toxicity.load(threshold).then(model => {

        model.classify(sentence).then(predictions => {

            for(let i = 0; i < predictions.length; i++){
                if(predictions[i].results[0].probabilities[0] > predictions[i].results[0].probabilities[1]){
                        predictions[i].results[0].match = false
                }else{
                    predictions[i].results[0].match = true
                }
            
            };
            
            return predictions;

        });
        
    });
};

export default toxicityTest;