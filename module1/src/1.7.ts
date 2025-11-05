{

    // learning spreat oprator


    const bros1: string[] = ['ali', 'ahmed', 'sayed'];
    const bros2: string[] = ['mohamed', 'hassan', 'hussien'];

    bros1.push(...bros2);
    console.log(bros1);


    const mentor1: string[] = ['osama', 'ahmed', 'sayed'];
    const mentor2: string[] = ['ali', 'hassan'];

    const allMentors = {
        ...mentor1,
        ...mentor2
    }
    console.log(allMentors);


    //learn rest oprator
    const greedFriends = (...friends: string[]) => {
        friends.forEach(friend => {
            console.log(`hello ${friend}`);
        });
    } 


    greedFriends('ali', 'ahmed', 'sayed', 'mohamed');

}