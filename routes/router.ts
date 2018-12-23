import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        mensaje: 'TODO OK'
    });

});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    
    res.json({
        ok: true,
        cuerpo,
        de,
    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    
    res.json({
        ok: true,
        id,
        cuerpo,
        de,
    });

});

export default router;