class HomePage {
    run() {
        const source = 'C:/Users/bensw/Desktop/read%20the%20structions';

        return [
            autoStyles([
                'list'
            ]),
            
            Heading('Read The Structions', '1', [
                Style({
                'font-family': 'Climate Crisis'
                })
            ]),
        ];
    }
}