import { program } from 'commander';
import pkg from '../package.json'
import { dev } from "./action/dev";

program.name(pkg.name)
program.description(pkg.description)
program.version(pkg.version)

program.command('dev').description('预览').action(dev)
program.command('create').description('创建').action(dev)
program.command('push').description('推送到远程').action(dev)
program.command('pull').description('拉取最新代码').action(dev)
program.command('share').description('获取分享链接').action(dev)


program.parse()
