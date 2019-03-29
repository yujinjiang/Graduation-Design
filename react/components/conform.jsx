import React from 'react';
import Modal from './modal';

export default class Confirm extends React.PureComponent {
    render() {
        const {
            title,
            content,
            cancelText,
            ensureText,
            onCancel,
            onOk
        } = this.props;

        return (
            <Modal>
                <header>
                    {title}
                </header>
                <main>
                    {content}
                </main>
                <footer>
                    <ul>
                        <li onClick={onCancel}>
                            {cancelText || '取消'}
                        </li>
                        <li onClick={onOk}>
                            {ensureText || '确认'}
                        </li>
                    </ul>
                </footer>
            </Modal>
        );
    }
}