import camelCase from 'lodash.camelcase';
import trim from 'lodash.trim';

export default function lessJsVars(less) {
    const lines = less ? less.split('\n') : [];
    const trimmedLines = lines.map(trim);
    const filteredLines = trimmedLines.filter(line => line.startsWith('@') && !line.startsWith('@media'));

    return filteredLines.reduce((vars, line) => {
        const splits = trim(line).split(':');

        const varNameRaw = splits[0];
        const varValRaw = splits[1];

        const varName = camelCase(varNameRaw);
        const varVal = trim(varValRaw.split(';')[0], [ '\"', '\'', ' ' ]);

        return {
            ...vars,
            [varName]: varVal
        };
    }, {});
}
