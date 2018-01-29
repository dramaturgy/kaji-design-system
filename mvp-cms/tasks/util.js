import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

const getEnv = () => {
  const activeEvents = {}
  const envs = [
    'dist',
    'dev',
    'deploy',
    'mapped',
    'stat'
  ]

  for ( let i = 0; i < envs.length; i ++ ) {
    activeEvents[envs[i]] = args[envs[i]]
  }

  return activeEvents
}

export {
  getEnv
}