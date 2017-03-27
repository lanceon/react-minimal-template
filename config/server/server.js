import {
  DEV_PORT,
} from '../Constants'

const devServer = {
    historyApiFallback: true,
    contentBase: 'build',
    stats: {
      colors: true,
    },
    port: DEV_PORT,
    noInfo: false,
  }
}

export default devServer
