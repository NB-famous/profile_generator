const readline = require('readline');
const { RSA_X931_PADDING } = require('constants');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Hello ${answer} nice to meet you`);
  rl.question('What is an activity you like doing? ', (answer2) => {
    console.log(`${answer2} sounds fun!!`);
    rl.question('What do you listen to while doing that? ', (answer3) => {
        console.log(`I love ${answer3} they're awesome!`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
            console.log(`Great ${answer4} mine to`);
            rl.question('What is your favourite thing to eat for that meal?', (answer5) => {
                console.log(`YUM!!! I LOVE ${answer5}`);
                rl.question('Which sport is your absolute favourite? ', (answer6) => {
                    console.log(`That is cool we should play ${answer6} together sometimes`);
                    rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
                        console.log(`Thank you for telling me your superpower!!`);
                        rl.question('Type yes to build profile\t', (input) => {
                            console.log(`\nHi my name is ${answer}, ${answer2} is what i love doing and I listen to ${answer3} while doing that.\nMy favourite meal is ${answer4} and it's because I usually have ${answer5} during.\nMy favourite sport to play is ${answer6} and if I would describe my superpower it would be ${answer7}\n`);
                            rl.close();         
                        });
                         
                      }); 
                  }); 
              });
          });
      });
  });
  
});
  //rl.close();
