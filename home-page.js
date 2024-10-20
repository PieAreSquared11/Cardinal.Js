class HomePage {
    run() {
        return [
            autoStyles([
                'list'
            ]),
            
            Heading('Your text', '1', [
                Style({
                'font-family': 'Climate Crisis'
                })
            ]),
        ];
    }
}
