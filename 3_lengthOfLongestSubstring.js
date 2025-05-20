const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function lengthOfLongestSubString(s){
    try{
        if(typeof s !== 'string'){
            throw new Error("Input must be string")
        }
        let lastSeen = new Array(128).fill(-1)
        let maxLength = 0;
        let left = 0;

        console.log(`\nProcessing: "${s}"`);
        console.log('-'.repeat(30))

        for(let right = 0; right < s.length; right++){
            let charCode = s.charCodeAt(right);

            if(charCode < 0 || charCode >= 128){
                throw new Error(`Invalid character at position ${right}: '${s[right]}' (code ${charCode})`);
            }

            if(lastSeen[charCode] >=left){
                console.log(`[Move left] Duplicate '${s[right]}' found, moving left from ${left} to ${lastSeen[charCode]+1}`)
                left = lastSeen[charCode]+1;
            }

            lastSeen[charCode] = right;
            let currentLength = right - left + 1;

            if(currentLength > maxLength){
                console.log(`[New max] Window [${left},${right}]: "${s.substring(left,right+1)}" (length: ${currentLength})`)
                maxLength = currentLength
            }else{
                console.log(`[window] [${left},${right}]: "${s.substring(left,right + 1)}" (current max: ${maxLength})`);
            }
        }
        console.log('-'.repeat(30))
        console.log(`Longest substring without repeating characters: ${maxLength}\n`);
        return maxLength
    }catch(error){
        console.error(`\nError:`,error?.message);
        return -1;
    }
}

function getUserInput(){
    readline.question(`\nEnter a string to analyze (or type "exit" to quit): `,input=>
    {
        if(input.toLowerCase()==='exit'){
            console.log('GoodBye!');
            readline.close();
            return;
        }
        lengthOfLongestSubString(input);
        getUserInput();
    }
    )
}

console.log('Longest Substring Without Repeating Characters Calculator')
console.log('-'.repeat(30))
getUserInput()