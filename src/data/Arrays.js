// BarGroupedChart
export const getLeagueArrayTotalData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 goal : value.allGoals,
                 assist : value.allAssists,
                }));
    return array
}

// CircleGroupedChart
export const getLeagueArrayTotalCardsData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 yellowcard : value.allYellowCards,
                 redcard : value.allRedCards,
                }));
    return array
}

// BumpChart
export const getLeagueArrayRankByYear = (obj_array, league) => {
    let array = obj_array.map(value => value.league.name === league ? 
                {x : value.year, y : value.rank} : null);
    array = array.filter(value => value !== null)
    return array
}

// CircleGroupedChart
export const getBestClubBySeason = (obj_array) => {
    const data = {}
    let best_club_array = obj_array.reduce((previous,current) => {

        let club = current.clubName
        if(!previous.hasOwnProperty(club)){
            previous[club] = 0;
        }
        previous[club]++;
        return previous
    },{})

    const array2=Object.keys(best_club_array).map(club => {
        const season_list=[]
        obj_array.forEach(value => {
            if(value.clubName === club){
                season_list.push(value.season)
                data[club] = {
                    id : club,
                    label : club,
                    value : season_list.length,
                    season : season_list
                }
            }
        }) 
        return data[club]
    })
    return array2
}