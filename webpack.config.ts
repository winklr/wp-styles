import path from 'path'
import { Configuration } from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const tsconfigPath = path.join(__dirname, 'src/tsconfig.json')

const config: Configuration = {
    entry: {
        main: './js/index.ts',
        styles: './css/styles.scss'
    },
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    output: {
        clean: true,
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.scss$/,
                include: [path.join(__dirname, 'src/css')],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    filename: 'assets/[name].js'
                }
            }
        },

        minimize: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                './*.php'
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                configFile: tsconfigPath,
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true
                }
            }
        })
    ]
}

export default config