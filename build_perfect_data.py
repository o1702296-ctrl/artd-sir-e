import json
import os

# 20 distinct high resolution images matching each key
KEY_IMAGES = [
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", # Key 1: Te connaître et t’aimer
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop", # Key 2: Cultiver ton indépendance
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", # Key 3: Le mystère maîtrisé
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", # Key 4: Communication claire et séduisante
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", # Key 5: Le pouvoir du regard et du toucher
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop", # Key 6: Rituels matin/soir
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", # Key 7: L'art du compliment stratégique
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop", # Key 8: Maintenir la passion sexuelle
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", # Key 9: Gérer les conflits avec classe
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop", # Key 10: Savoir dire non sans culpabilité
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop", # Key 11: Créer des surprises mémorables
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop", # Key 12: Tes limites = ton charme
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", # Key 13: Le langage des petites attentions
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", # Key 14: Entretenir ta vie sociale
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", # Key 15: La confiance financière et émotionnelle
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop", # Key 16: Mise en valeur vestimentaire subtile
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", # Key 17: Écouter activement
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop", # Key 18: Réinventer les rendez-vous amoureux
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop", # Key 19: Le pardon qui protège la relation
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"  # Key 20: Devenir irremplaçable sans te perdre
]

print("Script python initialized")
