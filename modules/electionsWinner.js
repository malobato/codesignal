export const solution = (votes, k) => {
  const maxVotes = Math.max(...votes)
  const maxCandidates = votes.filter(v => v === maxVotes).length
  return votes.reduce((acc, v) =>
    acc + ((v === maxVotes && maxCandidates === 1) || (v + k > maxVotes) ? 1 : 0)
  , 0)
}
