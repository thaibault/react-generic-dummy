import type { Mapping } from 'clientnode';
import type { FunctionComponent, ReactElement, RefObject } from 'react';
export type Props = Mapping<unknown> & {
    children?: ReactElement;
};
export declare const reference: {
    current: RefObject<unknown> | null;
};
/**
 * Generic strict wrapper component.
 * @param properties - Given component properties.
 * @param ref - Given reference to mutable persistent object.
 * @returns React elements.
 */
export declare const Dummy: FunctionComponent<Props> & {
    isDummy: true;
};
export default Dummy;
